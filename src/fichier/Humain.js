class Humain{
    constructor(name,job,skills=[]){
    this.name=name;
    this.job=job;
    this.skills =skills;
    }

    getJob(){

        console.log(this.job);

    };

    learnskills(newSkill){
        this.skills.put(newSkill);
    };

    forgetskills(forget){
        this.skills.pop(forget);


    };

    leavejob(){
console.log(this.job);
    }

}

class Student extends Humain{
    constructor(){
    super();


    
  }
}
let me = new Student();


me.getJob("Web developer");

me.learnNewSkill("React");

me.forgetSkill("React");

me.leaveJob();

