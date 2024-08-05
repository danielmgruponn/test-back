export default function httpResponse()
{
    return {
        responseSuccess,
        responseError
    }
}

async function responseSuccess(data: any, encrypt: string | null)
{
    if (encrypt && (process.env.ENCRYPT_DATA == "true")) {
        return {
            data,
            error: null
        }
    }
    return {
        data,
        error: null
    }
}

async function responseError(error: any, encrypt: string | null)
{
    if (encrypt && (process.env.ENCRYPT_DATA == "true")) {
        return {
            data: null,
            error
        }
    }
    return {
        data: null,
        error
    }
}

