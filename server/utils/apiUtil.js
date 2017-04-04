const success = (data) => {
    return {
        success: true,
        data: data
    }
}

const failure = (errMsg = '', errCode = 1, data) => {
    return {
        success: false,
        errCode: errCode,
        errMsg: errMsg,
        data: data
    }
}

export default {
    success, failure
}
