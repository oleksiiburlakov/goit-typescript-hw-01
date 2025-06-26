type User = {
      name: string;
      surname: string;
      email: string;
      password: string;
    }
    
    function createOrUpdateUser(initialValues: Partial<User>): User {
        const someUser: User = {
            name: '',
            surname: '',
            email: '',
            password: ''
        }
        return {...someUser, ...initialValues};
    }
    
    createOrUpdateUser({ 
      email: 'user@mail.com', 
      password: 'password123' 
    });
    