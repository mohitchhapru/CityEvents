export class User {    
    private id;
    private userName: String;
    private firstName: String;
    private lastName: String;

    public User(userName:string, firstName:string, lastName:string) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}