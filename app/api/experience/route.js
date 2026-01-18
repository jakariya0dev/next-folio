import experienceInfo from '@/data/experince.json';

export async function GET() {
    return Response.json({
        method: "GET",
        success: true,
        message: "Experience data fetched successfully",
        data: experienceInfo,
    });
}

export async function POST(request) {

    const data = await request.json();

    return Response.json({
        method: "POST",
        success: true,
        message: "POST request received for reviews",
        data: experienceInfo,
        youSent: data,
    }, { status: 201, headers: { 'Content-Type' : 'application/json'}});
}