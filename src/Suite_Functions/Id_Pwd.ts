

interface Jenkins_User {
    user: string;
    password: string;
    login: (user: string, password: string) => boolean;
}

export default function addKeyValue(user:string, password:string):void {
    console.log('addKeyValue: key = ' + user + ', value = ' + password)
}


class User_Creds implements Jenkins_User {
    user: "Bash_Profile_Id";
    password: "Bash_Profile_Pwd";

    login(user: string, password: string) {
        return (user == user && password == password)
    }


}

