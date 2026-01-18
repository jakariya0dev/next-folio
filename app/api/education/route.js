import educationInfo from '@/data/education.json';

export async function GET(){
    return Response.json({
        method: "GET",
        success: true,
        message: "Education data fetched successfully",
        data: educationInfo
    })
}

export async function POST(request) {

    const data = await request.json();

    return Response.json({
        method: "POST",
        success: true,
        message: "POST request received for reviews",
        data: educationInfo,
        youSent: data,
    }, { status: 201, headers: { 'Content-Type' : 'application/json'}});
}