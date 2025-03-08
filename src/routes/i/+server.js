export async function GET() {
    return new Response('Please use /i/[image name] to retrieve images.',
        {status: 400, headers: {'Content-type': 'text/plain'}})
}
