import axios from 'axios';
import swal from 'sweetalert';
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU3MzI1NzE3LCJleHAiOjE2NTczMjkzMTcsIm5iZiI6MTY1NzMyNTcxNywianRpIjoiZWdDeEYyWmN2QThaSFpNRSIsInN1YiI6MTU0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zVnkSnhKe2tOtmWZAJMtce29M2Wseqoaj-ezMcs_V3o';

const getCustomers = async () => {
    const response = await axios.get('https://mitramas-test.herokuapp.com/customers', {
      headers: {
        'Authorization': `${token}`,
      }
    });
    return response.data;
}

const createCustomers = (dataCustomer) => {
    const {
        customerName,
        customerJob,
        customerAddress,
        customerCountry,
        customerNumber,
        customerStatus,
    } = dataCustomer;

        const formData = new FormData();
        formData.append('name', customerName);
        formData.append('address', customerAddress);
        formData.append('country', customerCountry);
        formData.append('phone_number', customerNumber);
        formData.append('job_title', customerJob);
        formData.append('status', customerStatus);
    axios.post('https://mitramas-test.herokuapp.com/customers', formData, {
        headers: {
            'Authorization': `${token}`,
        }
    })
        .then(response => {
            if(response.status === 200) {
                swal({
                    title: 'Data Customer Berhasil Ditambahkan!',
                    text: `Selamat!`,
                    icon: 'success',
                    buttons: 'Ok'
                })
                .then(result => {
                    window.location.href = '/customers';
                })
                console.info('Berhasil Add Data!');
            }
        })
        .catch(error => {
            console.info('Error: ', error);
            swal({
                title: 'Gagal Menambahkan Data!',
                text: 'Mohon pastikan semua form input sudah terisi!',
                icon: 'error',
                buttons: 'Ok'
            })
        })
}

const checkUpdateForm = (dataCustomer) => {
    const {
        customerName,
        customerJob,
        customerAddress,
        customerCountry,
        customerNumber,
        customerStatus,
    } = dataCustomer;
  
    if (!customerName || !customerJob || !customerAddress || !customerCountry || !customerNumber || !customerStatus) {
      return swal({
        title: "Update Failed",
        text: 'Tolong diisi semua data nya yaa..',
        icon: 'error',
        button: 'Ok',
      });
    }
}

const updateCustomers = (dataCustomer, id) => {
    const {
        customerName,
        customerJob,
        customerAddress,
        customerCountry,
        customerNumber,
        customerStatus,
    } = dataCustomer;

    const data = {
        id: id,
        name: customerName,
        address: customerAddress,
        country: customerCountry,
        phone_number: customerNumber,
        job_title: customerJob,
        status: customerStatus,
    }
    
    checkUpdateForm(dataCustomer);

    fetch('https://mitramas-test.herokuapp.com/customers', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `${token}`,
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.success === true) {
                swal({
                    text: responseJson.message,
                    icon : 'success',
                    button: 'Ok',
                })
                .then(result => {
                    window.location.href = '/customers-data';
                })

                console.info('response: ', responseJson)
            }
        })
}

const deleteCustomers = (id) => {
    const data = {
        id: id,
    }
    
    swal({
        title: "Delete Customers?",
        text: "Data customer akan dihapus permanen",
        icon: "warning",
        buttons: ["Cancel", "Ok"],
        dangerMode: true,
    })
    .then(willDelete => {
        if(willDelete){
            fetch('https://mitramas-test.herokuapp.com/customers', {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `${token}`,
                },
                body: JSON.stringify(data)
        
            })
                .then(response => response.json())
                .then(responseJson => {
                    console.info(responseJson)
                    if (responseJson.success === true) {
                        swal({
                            text: responseJson.message,
                            icon: 'success',
                        })
                        .then(result => {
                            window.location.href = '/customers-data';
                        })
                    }
                })
        }
    })


        
    // const data = {
    //     id: 3648,
    // }

    // swal({
    //     title: "Delete Customers?",
    //     text: "Data customer akan dihapus permanen?",
    //     icon: "warning",
    //     buttons: ["Cancel", "Ok"],
    //     dangerMode: true,
    // })
    // .then(willDelete => {
    //     if(willDelete){
    //         axios('https://mitramas-test.herokuapp.com/customers', {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU3MjU2NDQwLCJleHAiOjE2NTcyNjAwNDAsIm5iZiI6MTY1NzI1NjQ0MCwianRpIjoiWEZpS3ZwNHNCVHRESVUxbCIsInN1YiI6MTU0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.RdqezUvymNdOIacFfzRAQ9S75KZEfvsrFOv4N-K2vc8',
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(response => {
    //             if(response.status === 200) {
    //               swal("Delete Success", {
    //                 icon: "success",
    //               }).then(res => {
    //                 window.location.href = `/customers`;
    //               })
    //             }
    //         })
    //         .catch(err => {
    //           console.log('Error: ', err);
    //         })
    //     }
    // })
}

export {
    getCustomers,
    createCustomers,
    updateCustomers,
    deleteCustomers,
}
