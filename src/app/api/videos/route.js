import { connectToDatabase } from "@/utils/db";
import Video from "@/models/Videos.model";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import FormData from "form-data";

// Helper function to find a video by ID or URL
const findVideoByIdOrUrl = async (identifier) => {
  const isObjectId = mongoose.Types.ObjectId.isValid(identifier);

  if (isObjectId) {
    const video = await Video.findById(identifier);
    if (video) return video;
  }

  return await Video.findOne({ url: identifier });
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 20;
  const skip = (page - 1) * limit;

  try {
    await connectToDatabase();
    const videos = await Video.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    const total = await Video.countDocuments();

    return new Response(
      JSON.stringify({
        data: videos,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  const { name, image, url, type, category } = await req.json();

  if (!image || !url) {
    return new Response(
      JSON.stringify({ error: "Image and URL are required fields" }),
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    // Step 1: Fetch the image from the provided URL
    const imageResponse = await axios({
      method: "GET",
      url: image,
      responseType: "stream",
    });

    const uniqueFilename = `uploaded_image_${Date.now()}_${uuidv4()}.jpg`;

    // Step 2: Prepare FormData for upload
    const formData = new FormData();
    formData.append("file", imageResponse.data, {
      filename: uniqueFilename,
      contentType: imageResponse.headers["content-type"],
    });

    // Step 3: Upload the image to another server
    const uploadResponse = await axios.post(
      "https://ar-hosting.pages.dev/upload",
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );

    const uploadedImageUrl = uploadResponse.data.data;

    if (!uploadedImageUrl) {
      throw new Error("Failed to retrieve uploaded image URL");
    }

    // Step 4: Save the video
    const video = await Video.create({
      name,
      category,
      type,
      image: uploadedImageUrl,
      url,
    });

    return new Response(
      JSON.stringify({
        message: "Video created successfully",
        video,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An error occurred while uploading the image" }),
      { status: 500 }
    );
  }
}

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");

//   try {
//     await connectToDatabase();

//     const video = await findVideoByIdOrUrl(id);

//     if (!video) {
//       return new Response(JSON.stringify({ error: "Video not found" }), {
//         status: 404,
//       });
//     }

//     return new Response(JSON.stringify(video), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }

// export async function POST(req) {
//   const { pathname } = new URL(req.url);
//   const identifier = pathname.split("/").pop();

//   const body = await req.json();

//   try {
//     await connectToDatabase();

//     const video = await findVideoByIdOrUrl(identifier);

//     if (!video) {
//       return new Response(JSON.stringify({ error: "Video not found" }), {
//         status: 404,
//       });
//     }

//     if (pathname.endsWith("/like")) {
//       video.likes += 1;
//     } else if (pathname.endsWith("/dislike")) {
//       video.dislikes += 1;
//     } else if (pathname.endsWith("/view")) {
//       video.views += 1;
//     } else if (pathname.endsWith("/vote")) {
//       video.votes += 1;
//     } else {
//       return new Response(JSON.stringify({ error: "Invalid endpoint" }), {
//         status: 400,
//       });
//     }

//     await video.save();

//     return new Response(
//       JSON.stringify({ message: "Action successful", video }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const body = await req.json();

  try {
    await connectToDatabase();

    const video = await Video.findByIdAndUpdate(
      id,
      { ...body },
      { new: true, runValidators: true }
    );

    if (!video) {
      return new Response(JSON.stringify({ error: "Video not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(video), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await connectToDatabase();

    const video = await Video.findByIdAndDelete(id);

    if (!video) {
      return new Response(JSON.stringify({ error: "Video not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Video deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
