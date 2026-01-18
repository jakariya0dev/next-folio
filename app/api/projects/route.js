import projectsInfo from '@/data/projects.json';

export async function GET() {
    return Response.json({
        method: "GET",
        success: true,
        message: "Projects data fetched successfully",
        data: projectsInfo,
    });
}

export async function POST(request) {

    const data = await request.json();

    return Response.json({
        method: "POST",
        success: true,
        message: "POST request received for reviews",
        data: projectsInfo,
        youSent: data,
    }, { status: 201, headers: { 'Content-Type' : 'application/json'}});
}