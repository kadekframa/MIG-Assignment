import axios from 'axios';
import swal from 'sweetalert';

const getCustomers = async () => {
    const response = await axios.get('https://mitramas-test.herokuapp.com/customers', {
      headers: {
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU3MjIzMzU5LCJleHAiOjE2NTcyMjY5NTksIm5iZiI6MTY1NzIyMzM1OSwianRpIjoiY1Z3M1E0ZHFLVElTb2l1NyIsInN1YiI6MTU0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.8NcBV1_gFWXubkculWHuCq9wAeir4wwHvf4nTo7Rk4A',
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
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU3MjIzMzU5LCJleHAiOjE2NTcyMjY5NTksIm5iZiI6MTY1NzIyMzM1OSwianRpIjoiY1Z3M1E0ZHFLVElTb2l1NyIsInN1YiI6MTU0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.8NcBV1_gFWXubkculWHuCq9wAeir4wwHvf4nTo7Rk4A',
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

    const data = new FormData();
    data.append('id', id);
    data.append('name', customerName);
    data.append('address', customerAddress);
    data.append('country', customerCountry);
    data.append('phone_number', customerNumber);
    data.append('job_title', customerJob);
    data.append('status', customerStatus);
    
    checkUpdateForm(dataCustomer);

    axios.put('https://mitramas-test.herokuapp.com/customers', data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU3MjIzMzU5LCJleHAiOjE2NTcyMjY5NTksIm5iZiI6MTY1NzIyMzM1OSwianRpIjoiY1Z3M1E0ZHFLVElTb2l1NyIsInN1YiI6MTU0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.8NcBV1_gFWXubkculWHuCq9wAeir4wwHvf4nTo7Rk4A',
        }
    })
        .then(response => {
            if(response.status === 200) {
                swal({
                    title: 'Data Customer Berhasil Diperbaharui!',
                    text: `Selamat!`,
                    icon: 'success',
                    buttons: 'Ok'
                })
                .then(result => {
                    window.location.href = '/customers';
                })
                console.info('Berhasil Update Data!');
            }
            
            console.info('update response: ', response);
        })
        .catch(error => {
            console.info('Error: ', error);
            swal({
                title: 'Gagal Mengupdate Data!',
                text: 'Mohon pastikan semua form input sudah terisi!',
                icon: 'error',
                buttons: 'Ok'
            })
        })
}

const deleteCustomers = (id) => {
    swal({
        title: "Delete Customers?",
        text: "Data customer akan dihapus permanen?",
        icon: "warning",
        buttons: ["Cancel", "Ok"],
        dangerMode: true,
    })
    .then(willDelete => {
        if(willDelete){
            axios.delete('https://mitramas-test.herokuapp.com/customers', {
                headers: {
                    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU3MjIzMzU5LCJleHAiOjE2NTcyMjY5NTksIm5iZiI6MTY1NzIyMzM1OSwianRpIjoiY1Z3M1E0ZHFLVElTb2l1NyIsInN1YiI6MTU0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.8NcBV1_gFWXubkculWHuCq9wAeir4wwHvf4nTo7Rk4A',
                }
            })
            .then(response => {
                if(response.status === 200) {
                  swal("Delete Success", {
                    icon: "success",
                  }).then(res => {
                    window.location.href = `/customers`;
                  })
                }
            })
            .catch(err => {
              console.log('Error: ', err);
            })
        }
    })
}

export {
    getCustomers,
    createCustomers,
    updateCustomers,
    deleteCustomers,
}
