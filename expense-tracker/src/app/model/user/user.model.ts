export class User{

    public firstName: String;
    public lastName: String;
    public mobile: Number;
    public email: String;

    constructor(firstName:string,lastName:string,mobile:Number,email:String){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.email = email;
    }
}