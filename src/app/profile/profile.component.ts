import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { QuestionClass } from './question-class';
import { ToastrService } from 'ngx-toastr';
import { environment } from './../../environments/environment';

// const hosturl = "https://api.careernaksha.com";
// const hosturl = "http://localhost:3000";
const hosturl = environment.hosturl;
const uploaduri = hosturl + "/api/upload";



@Component({
  selector: 'app2profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  cdnHost = environment.cdnHost;
  // hosturl = environment.hosturl;
  uploaduri = hosturl + "/api/upload";

  x = false;

  username = "";

  attachmentList: any = [];

  displayProfileSettings: string = 'basic_information';
  showProfileTab: boolean = true;
  showFormTab: boolean = false;
  showTestTab: boolean = false;
  showQuizTab: boolean = false;


  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  id = this.getDecodedAccessToken(localStorage.getItem('token')).subject;
  uploader: FileUploader = new FileUploader({ url: uploaduri, authToken: this.id });

  uploadedfiles = {
    id: this.id,
    file: ""
  }



  formid = {
    id: this.id
  }

  know = {
    reason: "",
    refrence: "",
    id: this.id
  }



  basicinfo = {
    id: this.id,
    name: "",
    email: "",
    dob: "",
    phone: ""
  }

  personalinfo = {
    id: this.id,
    gender: "",
    marital: "",
    familymembers: "",
    occupation: "",
    familyincome: "",
    individualincome: "",
    facebook: "",
    linkedin: "",
    twitter: "",
    address: "",
    skills: "",
    eca: "",
    higheduqual: ""
  }

  educationalinfo = {
    id: this.id,
    highschool: "",
    college: "",
    bfield: "",
    buniversity: "",
    mfield: "",
    muniversity: "",
    toeflscore: "",
    grescore: "",
    gmatscore: "",
    ieltsscore: "",
    additionalqual: ""
  }

  professionalinfo = {
    id: this.id,
    onerole: "",
    onelocation: "",
    onesalary: "",
    tworole: "",
    twolocation: "",
    twosalary: ""
  }

  interestinfo = {
    id: this.id,
    nextmove: "",
    fieldofinterest: "",
    joblocation: "",
    jobtype: "",
    desiredsalary: "",
    desiredlivingexp: "",
    desirefive: "",
    desireten: "",
    onegoal: "",
    twogoal: ""
  }

  lifestyleinfo = {
    id: this.id,
    entertainment: "",
    living: "",
    food: "",
    travel: "",
    electronics: "",
    misc: ""
  }


  isQuestionCardShow: boolean = false;
  test: boolean;
  totalAnswered: number = 0;
  rightAnswer: number;
  questionObj = new QuestionClass();
  @ViewChild('submitModal') submitModal: ModalDirective;
  @ViewChild('addQuestionModal') addQuestionModal: ModalDirective;
  @ViewChild('answerModal') answerModal: ModalDirective;
  @ViewChild('questionForm') questionForm: any;
  @ViewChild('questionTest') questionTest: any;


  constructor(private auth: AuthService, private router: Router, private meta: Meta, private titleService: Title, private toastr: ToastrService) {




    this.scroll();
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
      this.router.navigate(['/thankyou']);
    }

    this.formDetails()

    this.getFiles()
    this.getInfo();

    this.meta.addTag({ name: 'description', content: 'create your profile, build to perfection, enhance your resume and help school, college students get internships, jobs and admissions for higher studies' });
    this.meta.addTag({ name: 'author', content: 'www.careernaksha.com' });
    this.meta.addTag({ name: 'keywords', content: 'Resume, profile, one page, school, colleges, CV, background' });

    this.setTitle('Create | Build | Transform | Enhance | Profile | Resume | CareerNaksha');

  }



















  scroll() {
    window.scroll(0, 0);
  }


  answerArray = [];


  info = {
    id: this.id
  }


  getInfo() {
    this.auth.getInfo(this.info)
      .subscribe(
        res => {
          console.log(res.test);
          if (res.test == "yes") {
            this.test = false;
          } else {
            if (res.test == "undefined" || "no" || null) {
              this.test = true;
            }
          }
        },
        err => console.log(err)
      )
  }


  submitButton = false;

  allQuestions: any = [{
    "id": 1,
    "question": "Am the life of the party.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "c"
  }, {
    "id": 2,
    "question": "Feel little concern for others",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  }, {
    "id": 3,
    "question": "Am always prepared.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 4,
    "question": "Get stressed out easily.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 5,
    "question": "Have a rich vocabulary.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  }
  ];

  k = 5;
  l = null;
  r = null;
  q = 0;
  Next() {
    if ("selected" in this.allQuestions[0] && (this.allQuestions[0]["selected"] != null) && (this.allQuestions[1]["selected"] != null) && (this.allQuestions[2]["selected"] != null) && (this.allQuestions[3]["selected"] != null) && (this.allQuestions[4]["selected"] != null)) {
      this.r = 0;
      for (this.r; this.r < 5; this.r++) {
        this.answerdata.push(this.allQuestions[this.r]["selected"]);
      }
      this.allQuestions.length = 0;
      for (this.l = this.k; this.l < this.k + 5; this.l++) {
        this.allQuestions.push(this.questionsArray[this.l]);
      }
      this.k = this.l;
      console.log(this.answerdata);
      console.log(this.k);
      if (this.k == 50) {
        this.submitButton = true;
      }
      window.scroll(0, 0);
      this.error = "";
      this.completed = this.k - 5;
    } else {
      this.error = "Complete all the questions please!!";
    }
  }
  Prev() {
    if (this.allQuestions[0].id == 1) {

      this.error = "It is the first page!!";

    } else {
      this.allQuestions.length = 0;

      for (this.l = this.k - 10; this.l < this.k - 5; this.l++) {
        this.allQuestions.push(this.questionsArray[this.l]);
      }

      this.k = this.l;
      window.scroll(0, 0);
      this.submitButton = false;
    }

  }



  questionsArray: any = [{
    "id": 1,
    "question": "Am the life of the party.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "c"
  }, {
    "id": 2,
    "question": "Feel little concern for others",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 3,
    "question": "Am always prepared.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 4,
    "question": "Get stressed out easily.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 5,
    "question": "Have a rich vocabulary.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 6,
    "question": "Don't talk a lot.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 7,
    "question": "Am interested in people",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 8,
    "question": "Leave my belongings around.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 9,
    "question": "Am relaxed most of the time.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 10,
    "question": "Have difficulty understanding abstract ideas.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 11,
    "question": "Feel comfortable around people.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 12,
    "question": "Insult people.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 13,
    "question": "Pay attention to details.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 14,
    "question": "Worry about things.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 15,
    "question": "Have a vivid imagination.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 16,
    "question": "Keep in the background.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 17,
    "question": "Sympathize with others' feelings.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 18,
    "question": "Make a mess of things.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 19,
    "question": "Seldom feel blue.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 20,
    "question": "Am not interested in abstract ideas.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 21,
    "question": "Start conversations.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 22,
    "question": "Am not interested in other people's problems.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 23,
    "question": "Get chores done right away.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 24,
    "question": "Am easily disturbed.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 25,
    "question": "Have excellent ideas.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 26,
    "question": "Have little to say.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 27,
    "question": "Have a soft heart",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 28,
    "question": "Often forget to put things back in their proper place.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 29,
    "question": "Get upset easily.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 30,
    "question": "Do not have a good imagination.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 31,
    "question": "Talk to a lot of different people at parties.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 32,
    "question": "Am not really interested in others.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 33,
    "question": "Like order.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 34,
    "question": "Change my mood a lot.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 35,
    "question": "Am quick to understand things.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 36,
    "question": "Don't like to draw attention to myself.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 37,
    "question": "Take time out for others.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 38,
    "question": "Shirk my duties",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 39,
    "question": "Have frequent mood swings.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 40,
    "question": "Use difficult words.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 41,
    "question": "Don't mind being the center of attention",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 42,
    "question": "Feel others' emotions.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 43,
    "question": "Follow a schedule.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 44,
    "question": "Get irritated easily.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 45,
    "question": "Spend time reflecting on things.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 46,
    "question": "Am quiet around strangers.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 47,
    "question": "Make people feel at ease.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 48,
    "question": "Am exacting in my work.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 49,
    "question": "Often feel blue.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  },
  {
    "id": 50,
    "question": "Am full of ideas.",
    "very less": "1",
    "less": "2",
    "ok": "3",
    "more": "4",
    "very more": "5",
    "answer": "b"
  }];










  error = "";


  answerdata = [];
  completed = this.answerdata.length;

  reportData = {
    Extroversion: "",
    Agreeableness: "",
    Conscientiousness: "",
    Neuroticism: "",
    Open: "",
    response: this.answerdata,
    id: this.id

  }


  submitTest() {

    if ("selected" in this.allQuestions[0] && (this.allQuestions[0]["selected"] != null) && (this.allQuestions[1]["selected"] != null) && (this.allQuestions[2]["selected"] != null) && (this.allQuestions[3]["selected"] != null) && (this.allQuestions[4]["selected"] != null)) {

      this.r = 0;
      for (this.r; this.r < 5; this.r++) {
        this.answerdata.push(this.allQuestions[this.r]["selected"]);
      }


      for (let j = 0; j < 50; j++) {
        this.answerdata[j] = parseInt(this.answerdata[j]);
      }


      var e = (((20 + this.answerdata[0] - this.answerdata[5] + this.answerdata[10] - this.answerdata[15] + this.answerdata[20] - this.answerdata[25] + this.answerdata[30] - this.answerdata[35] + this.answerdata[40] - this.answerdata[45]) / 40) * 100).toFixed(1);

      var a = (((14 - this.answerdata[1] + this.answerdata[6] - this.answerdata[11] + this.answerdata[16] - this.answerdata[21] + this.answerdata[26] - this.answerdata[31] - this.answerdata[36] + this.answerdata[41] + this.answerdata[46]) / 40) * 100).toFixed(1);

      var c = (((14 + this.answerdata[2] - this.answerdata[7] + this.answerdata[12] - this.answerdata[17] + this.answerdata[21] - this.answerdata[27] + this.answerdata[32] - this.answerdata[37] + this.answerdata[42] + this.answerdata[47]) / 40) * 100).toFixed(1);

      var n = (((38 - this.answerdata[37] - this.answerdata[3] + this.answerdata[8] - this.answerdata[13] - this.answerdata[23] - this.answerdata[28] - this.answerdata[33] - this.answerdata[38] - this.answerdata[43] - this.answerdata[48]) / 40) * 100).toFixed(1);

      var o = (((8 + this.answerdata[4] - this.answerdata[9] + this.answerdata[14] - this.answerdata[19] + this.answerdata[24] - this.answerdata[29] + this.answerdata[34] + this.answerdata[39] + this.answerdata[44] + this.answerdata[28]) / 40) * 100).toFixed(1);

      localStorage.setItem('e', e.toString());
      localStorage.setItem('a', a.toString());
      localStorage.setItem('c', c.toString());
      localStorage.setItem('n', n.toString());
      localStorage.setItem('o', o.toString());


      this.reportData.Extroversion = e.toString();
      this.reportData.Agreeableness = a.toString();
      this.reportData.Conscientiousness = c.toString();
      this.reportData.Neuroticism = n.toString();
      this.reportData.Open = o.toString();





      if (this.answerdata.length < 50) {
        this.error = "Complete all the questions !!";
        console.log(this.answerdata.length);
      } else {
        this.router.navigate(['/test-report']);
        this.auth.sendReport(this.reportData)
          .subscribe(
            res => {
              console.log(res);
            },
            err => console.log(err)
          )

      }



    } else {
      this.error = "Complete all the questions please!!";
    }
  }












  startQuiz() {
    for (let i = 0; i < this.allQuestions.length; i++) {
      if ("selected" in this.allQuestions[i]) {
        delete this.allQuestions[i]["selected"];
      }

    }
    this.questionTest.reset();
    this.isQuestionCardShow = true;

  }

  HomePage() {
    this.isQuestionCardShow = false;
  }

  checkAnswers() {
    this.submitModal.hide();
    this.answerModal.show();
  }







  knowReason($event) {
    this.auth.knowData(this.know)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )

  }






















  ngOnInit() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

  }




  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
    window.scroll(0, 0);
  }



  clickProfileTab(x: string): void {
    if (this.displayProfileSettings != x) {
      this.displayProfileSettings = x;
    }
    window.scroll(0, 0);
  }

  clicksave() {
    if (this.displayProfileSettings == 'basic_information') {
      this.displayProfileSettings = 'personal_information'
    } else if (this.displayProfileSettings == 'personal_information') {
      this.displayProfileSettings = 'education_information'
    }

    else if (this.displayProfileSettings == 'education_information') {
      this.displayProfileSettings = 'professional_information'
    }
    else if (this.displayProfileSettings == 'professional_information') {
      this.displayProfileSettings = 'interest_information'
    }
    else if (this.displayProfileSettings == 'interest_information') {
      this.displayProfileSettings = 'lifestyle_information'
    }

    else if (this.displayProfileSettings == 'lifestyle_information') {
    }
    window.scroll(0, 0);
  }

  fillManually() {
    this.showProfileTab = false;
    this.showFormTab = true;
    this.displayProfileSettings = 'basic_information'
  }
  backToProfile() {
    this.showFormTab = false;
    this.showProfileTab = true;
  }

  showTest() {
    this.showQuizTab = true;
    this.showProfileTab = false;

  }



  formDetails() {
    this.auth.formDetails(this.formid)
      .subscribe(
        res => {

          console.log(res);
          this.basicinfo.name = res.basic.name;
          this.basicinfo.dob = res.basic.dob;
          this.basicinfo.email = res.basic.email;
          this.basicinfo.phone = res.basic.phone;
          this.personalinfo.gender = res.personal.gender;
          this.personalinfo.marital = res.personal.marital;
          this.personalinfo.familymembers = res.personal.familymembers;
          this.personalinfo.occupation = res.personal.occupation;
          this.personalinfo.familyincome = res.personal.familyincome;
          this.personalinfo.individualincome = res.personal.individualincome;
          this.personalinfo.facebook = res.personal.facebook;
          this.personalinfo.linkedin = res.personal.linkedin;
          this.personalinfo.twitter = res.personal.twitter;
          this.personalinfo.address = res.personal.address;
          this.personalinfo.skills = res.personal.skills;
          this.personalinfo.eca = res.personal.eca;
          this.personalinfo.higheduqual = res.personal.higheduqual;
          this.educationalinfo.highschool = res.educational.highschool;
          this.educationalinfo.college = res.educational.college;
          this.educationalinfo.bfield = res.educational.bfield;
          this.educationalinfo.buniversity = res.educational.buniversity;
          this.educationalinfo.mfield = res.educational.mfield;
          this.educationalinfo.muniversity = res.educational.muniversity;
          this.educationalinfo.toeflscore = res.educational.toeflscore;
          this.educationalinfo.grescore = res.educational.grescore;
          this.educationalinfo.gmatscore = res.educational.gmatscore;
          this.educationalinfo.ieltsscore = res.educational.ieltsscore;
          this.educationalinfo.additionalqual = res.educational.additionalqual;
          this.professionalinfo.onerole = res.professional.onerole;
          this.professionalinfo.onelocation = res.professional.onelocation;
          this.professionalinfo.onesalary = res.professional.onesalary;
          this.professionalinfo.tworole = res.professional.tworole;
          this.professionalinfo.twolocation = res.professional.twolocation;
          this.professionalinfo.twosalary = res.professional.twosalary;
          this.interestinfo.nextmove = res.interest.nextmove;
          this.interestinfo.fieldofinterest = res.interest.fieldofinterest;
          this.interestinfo.joblocation = res.interest.joblocation;
          this.interestinfo.jobtype = res.interest.jobtype;
          this.interestinfo.desiredsalary = res.interest.desiredsalary;
          this.interestinfo.desiredlivingexp = res.interest.desiredlivingexp;
          this.interestinfo.desirefive = res.interest.desirefive;
          this.interestinfo.desireten = res.interest.desireten;
          this.interestinfo.onegoal = res.interest.onegoal;
          this.interestinfo.twogoal = res.interest.twogoal;
          this.lifestyleinfo.entertainment = res.lifestyle.entertainment;
          this.lifestyleinfo.living = res.lifestyle.living;
          this.lifestyleinfo.food = res.lifestyle.food;
          this.lifestyleinfo.travel = res.lifestyle.travel;
          this.lifestyleinfo.electronics = res.lifestyle.electronics;
          this.lifestyleinfo.misc = res.lifestyle.misc;








        },
        err => console.log(err)
      )
  }


  basicsave() {
    this.auth.saveBasic(this.basicinfo)
      .subscribe(
        res => {
          console.log(res);
          console.log(this.basicinfo);
        },
        err => console.log(err)
      )
  }


  personalsave() {
    this.auth.savePersonal(this.personalinfo)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }


  educationalsave() {
    this.auth.saveEducational(this.educationalinfo)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }


  professionalsave() {
    this.auth.saveProfessional(this.professionalinfo)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }


  interestsave() {
    this.auth.saveInterest(this.interestinfo)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }


  lifestylesave() {
    this.auth.saveLifestyle(this.lifestyleinfo)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/thankyou']);

        },
        err => console.log(err)
      )
  }




  getFiles() {
    this.auth.getFiles(this.uploadedfiles)
      .subscribe(
        res => {

          if (localStorage.getItem('social2name') == null) {
            this.username = res.name;
            this.uploadedfiles.file = res.data.doc.link;
          }
          else {

            this.username = localStorage.getItem('social2name');
            console.log(this.username);
            console.log(res);
            this.uploadedfiles.file = res.data.doc.link;


          }


        },
        err => console.log(err)
      )



  }



}
