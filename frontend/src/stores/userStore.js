export const createUserStore = ()=>{
    return{
        user:{
            name:"Elon Musk",
            email:"musk@iitj.ac.in",
            contact:646516813481,
            role:"Student",
            image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        updateContact(num){
            this.user.contact = num
        },
        activeHoldings :[]
    }
}