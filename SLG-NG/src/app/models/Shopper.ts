export class Shopper {

    u_id: number;
    f_name: string;
    l_name: string;
    username: string;
    password: string;

    constructor(u_id: number, f_name: string, l_name: string, username: string, password: string) {
        this.u_id = u_id;
        this.f_name = f_name;
        this.l_name = l_name;
        this.username = username;
        this.password = password;
    }
}