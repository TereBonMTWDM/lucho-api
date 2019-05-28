'use strinct'
module.exports = {
    error : function(error){
        return {
            alert: 'danger',
            statusCode: 500,
            statusText: 'Internal Server Error',
            info: {},
            message: error
        }
    },
    notFound: function(msg){
        return{
            alert: 'danger',
            statusCode: 404,
            statusText: 'Not Found',
            info: {},
            message: msg
        }
    },
    success: function(model, msg){
        return{
            alert: 'success',
            statusCode: 200, 
            statusText: 'OK',
            info: model,
            message: msg
        }
    },
    noContent: function(msg){
        return{
            alert: 'danger',
            statusCode: 204,
            statusText: 'No Content',
            info: {},
            message: msg
        }
    }
}