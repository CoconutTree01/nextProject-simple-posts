export async function GET(request) {
    const data = {
        name: 'John Doe',
        age: 30,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
    return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request) {
    return new Response(request.body, { status: 200 });
}