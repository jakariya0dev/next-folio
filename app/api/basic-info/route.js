import basicInfo from "@/data/info.json";

export async function GET() {
  return Response.json({
    method: "GET",
    success: true,
    message: "Data fetched successfully",
    data: basicInfo,
  });
}

export async function POST(request) {

    const data = await request.json();

    return Response.json({
        method: "POST",
        success: true,
        message: "POST request received for reviews",
        data: basicInfo,
        youSent: data,
    }, { status: 201, headers: { 'Content-Type' : 'application/json'}});
}
