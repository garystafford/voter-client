import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/retry';
import {ICandidate} from './candidate';
import {Vote} from './vote';
import {IElection} from './election';
import {IResult} from './result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Voter API Client';
  currentElection: string;
  candidates: ICandidate[];
  elections: IElection[];
  results: IResult[];
  totalVotes: number;
  winningVotes: number;
  vote: Vote = new Vote();

  constructor(private http: HttpClient) {
    // intentionally left blank
  }

  ngOnInit(): void {
    this.getElections();
    this.getCandidates();
    this.getResults();
    this.getTotalVotes();
    this.getWinningVotes();
  }

  electionChange(electionChoice: string): void {
    if (this.currentElection !== electionChoice) {
      this.currentElection = electionChoice;
    }
    this.getCandidates();
    this.getResults();
    this.getTotalVotes();
    this.getWinningVotes();
  }

  private getElections(): void {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.get<any[]>(`${environment.apiUrl}/election/elections`,
      {headers: headers, observe: 'response'})
      .retry(1)
      .subscribe(res => {
          const elections = (Object.values(res.body))[0];
          this.elections = (Object.values(elections)[0]);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });
  }

  private getCandidates(): void {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.get<any[]>(`${environment.apiUrl}/candidate/candidates/summary/${this.currentElection}`,
      {headers: headers, observe: 'response'})
      .retry(1)
      .subscribe(res => {
          this.candidates = (Object.values(res.body))[0];
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });
  }

  private getResults(): void {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.get<any[]>(`${environment.apiUrl}/voter/results/${this.currentElection}`,
      {headers: headers, observe: 'response'})
      .retry(1)
      .subscribe(res => {
          this.results = (Object.values(res.body))[0];
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });
  }

  private getTotalVotes(): void {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.get<number>(`${environment.apiUrl}/voter/results/${this.currentElection}/votes`,
      {headers: headers, observe: 'response'})
      .retry(1)
      .subscribe(res => {
          this.totalVotes = (Object.values(res.body))[0];
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });
  }

  private getWinningVotes(): void {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.get<number>(`${environment.apiUrl}/voter/winners/${this.currentElection}/votes`,
      {headers: headers, observe: 'response'})
      .retry(1)
      .subscribe(res => {
          this.winningVotes = (Object.values(res.body))[0];
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });
  }

  postVote(candidateChoice: string): void {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.vote.candidate = candidateChoice;
    this.vote.election = this.currentElection;
    this.http.post<void>(`${environment.apiUrl}/voter/votes`, this.vote,
      {headers: headers, observe: 'response'})
      .retry(1)
      .subscribe(res => {
          this.getResults();
          this.getTotalVotes();
          this.getWinningVotes();
          (<HTMLSelectElement>document.getElementById('candidateSelect')).selectedIndex = 0;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });
  }
}
