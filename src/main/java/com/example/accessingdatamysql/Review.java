package com.example.accessingdatamysql;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;
@Entity 
public class Review {
	private String userName;
	private String movieName;
	private double score;
	private String fullReview;
	public Review(String userName,String movieName,double score,String fullReview) {
		this.userName=userName;
		this.movieName=movieName;
		this.score=score;
		this.fullReview=fullReview;
	}
	public String getmovieName() {
		return this.movieName;
	}
	public void setmovieName(String movieName) {
		this.movieName=movieName;
	}
	public String getUName() {
		return this.userName;
	}
	public void setUName(String userName) {
		this.userName=userName;
	}
	public double getScore() {
		return this.score;
	}
	public void setScore(double score) {
		this.score=score;
	}
	public boolean validateScore() {
		if(this.score>=0&&this.score<=5) {
			return true;
		}
		return false;
	}
	public void setFullReview(String fullReview) {
		this.fullReview=fullReview;
	}
	public String getFullReview() {
		return this.fullReview;
	}
	public String toString() {
		return "user name: "+this.userName+", movieName: "+this.movieName+", score: "+score+", full description: "+this.fullReview;
	}
}
