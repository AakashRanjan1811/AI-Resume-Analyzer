import API from './api'

export const uploadResume = async (

    formData,
    token

) => {

    const response = await API.post(

        '/analyze/resume',

        formData,

        {

            headers: {

                Authorization: `Bearer ${token}`,

                'Content-Type':
                    'multipart/form-data',
            },
        }
    )

    return response.data
}