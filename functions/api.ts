let state = 0

export const onRequestGet: PagesFunction = () => new Response(String(++state))
