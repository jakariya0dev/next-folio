export async function GET() {

    try{
        const res = await fetch('https://api.pexels.com/v1/collections/nghr7kh?per_page=10&sort=desc', {
            headers: {
                Authorization: process.env.PEXELS_API_KEY
            },
            cache: 'no-store'
        });

        if(!res.ok){
            return Response.json({error: 'Failed to fetch photos from Pexels'}, {status: res.status});
        }
        const data = await res.json();
        return Response.json(data)
    }
    
    catch(error){
        return Response.json({error: 'Internal Server Error'}, {status: 500});
    }

}