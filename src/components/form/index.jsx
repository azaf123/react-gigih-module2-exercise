const Form = () => {


    return (
        <div>
        <h1>Form</h1>
        <form action="">
            {/* form username */}
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" />
            {/* form password */}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
            {/* form email */}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
            {/* form phone number */}
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" placeholder="Phone Number" />
            {/* form address */}
            <label htmlFor="address">Address</label>
            <input type="text" name="address" placeholder="Address" />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
    }
    export default Form;