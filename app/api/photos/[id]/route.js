export async function GET(request, { params }) {
  const { id } = await params;

  if (!id) {
    return Response.json({ error: "Photo ID is required" }, { status: 400 });
  }

  try {

    const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return Response.json(
        { error: "Failed to fetch photo details" },
        { status: res.status },
      );
    }

    const data = await res.json();
    return Response.json(data);

  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
