const form=new FormData();
form.append('image_file', photo);

fetch('https://clipdrop-api.co/portrait-depth-estimation/v1',
    {
        method: 'POST',
        headers: {
            'Content-Type':'multipart/form-data',
            'x-api-key' : '1222299111376b1774e42691a3d705d6b9b98d1ba6ebabc98e28312ea55f0362d64e27bdc61136cd12ae097c05bb8b8d',
        },
        body: form,
    })
    .then(res => res.arrayBuffer())
    .then(buffet => {
        // buffer here is a binary representation of the returned image
    })