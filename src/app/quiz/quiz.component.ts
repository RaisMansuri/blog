import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
	isQuestionCardShow: boolean = false;
	isAttempted:boolean = false;
	isSubmitted: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number=0;
	score:number=0;

	@ViewChild('submitModal') submitModal: ModalDirective;
	@ViewChild('answerModal') answerModal : ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

	constructor( private http: HttpClient ) { }

	answerArray = [];
	someDate: Date;
	allQuestions: any = [{
		"id": 1,
		"question": "Which Of The Following Is More Detailed Document?",
		"a": "Curriculum Vitae",
		"b": "Resume",
		"answer": "a"
	},
	{
		"id": 2,
		"question": "State True or False: Some European countries may use the terms CV and Resume interchangeably.",
		"a": "True",
		"b": "False",
		"answer": "a"
	},
	{
		"id": 3,
		"question": "State True or False: Resume should include every single job you have ever held",
		"a": "True",
		"b": "False",
		"answer": "b"
	},
	{
		"id": 4,
		"question": "Case: I am very passionate about dancing and have also taken formal training in classical dance. I have won prestigious awards for my performances. Should I mention about Dancing as a Hobby in my Resume?",
		"a": "Yes",
		"b": "No",
		"answer": "a"
	},
	{
		"id": 5,
		"question": "How much time does a recruiter give to every Resume?",
		"a": "5-7 seconds",
		"b": "5-7 minutes",
		"answer": "a"
	},
	{
		"id": 6,
		"question": "Case: I want to apply for a position of Professor at a University. Which document will be applicable to me?",
		"a": "Curriculum Vitae",
		"b": "Resume",
		"answer": "a"
	},
	{
		"id": 7,
		"question": "State True or False: Once the recruiter has gone through your Resume, he will not prefer going through your LinkedIn Profile",
		"a": "True",
		"b": "False",
		"answer": "b"
	},
	{
		"id": 8,
		"question": "Which of the following should be included on your Resume?",
		"a": "References",
		"b": "Birthdate",
		"c": "City",
		"d": "Photograph",
		"e": "Career Objective",
		"answer": "e"
	},
	{
		"id": 9,
		"question": "Which of the following formatting options should be used in a Resume?",
		"a": "Using Colors to highlight Data",
		"b": "Using Infographics",
		"c": "Using Bold to highlight Data",
		"d": "Using Paragraphs to describe Work Experience",
		"answer": "c"
	},
	{
		"id": 10,
		"question": "What % of recruiters reject the candidates based on unprofessional Email ID? ",
		"a": "51%",
		"b": "76%",
		"c": "84%",
		"d": "90%",
		"answer": "b"
	}
	
	];

	/**Method call on submit the test */
	submitTest() {
		this.isSubmitted=true;
		this.rightAnswer = 0;
		this.isAttempted = true;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
					this.score=this.score+4;
				}
				else{
					this.score=this.score-1;
				}
			}

		}
		this.submitModal.show();
		this.talktodb(this.score).subscribe(()=>{});

	}
	talktodb(data){
		return this.http.post<any>('', data);
	}
	startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}

		}
		this.isAttempted = false;
		this.score=0;
		this.questionTest.reset();
		this.isQuestionCardShow = true;

	}
	HomePage() {
		this.isQuestionCardShow = false;
	}
	addQuestion(){
		// this.addQuestionModal.show();
	}
	// submitAddQuestion(){
	// 	let quesTemp = JSON.parse(JSON.stringify(this.questionObj));
	// 	quesTemp["id"] = this.allQuestions.length+1;
	// 	this.allQuestions.push(quesTemp);
	// 	this.questionForm.reset();
	// 	this.toastr.success("Question Added Successfully!!");
	// 	// this.addQuestionModal.hide();

	// }
	checkAnswers(){
		this.submitModal.hide();
		this.answerModal.show();
	}
	


	
	ngOnInit() {
		


	}

}