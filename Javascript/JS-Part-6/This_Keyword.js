let student={
    eng: 30,
    maths: 70,
    science:80,
    hindi:64,
    sanskrit:90,
    History:70,

    getAvg(){
        let avg=(this.maths+this.science+this.eng)/3;
        console.log(avg);
    }
};

student.getAvg();