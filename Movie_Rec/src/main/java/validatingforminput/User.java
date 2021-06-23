package validatingforminput;
import java.util.ArrayList;
import java.util.List;
public class User {
	private String userName;
	private String password;
	private List<Review> reviews;
	public User(String userName,String password) {
		this.userName=userName;
		this.password=password;
		this.reviews=new ArrayList<>();
	}
	public String getUName() {
		return this.userName;
	}
	public void setUName(String userName) {
		this.userName=userName;
	}
	public String getPassword() {
		return this.password;
	}
	public void setPassword(String password) {
		this.password=password;
	}
	public boolean login(String pass, String uName){
		if(pass.equals(this.password)&&uName.equals(this.userName)) {
			return true;
		}
		return false;
	}
	public String toString() {
		return "user name: "+this.userName+", password: "+this.password;
	}
	public void enterNewReview() {
		this.reviews.add(new Review(this.userName,"movie name",3.5,"nice movie"));
	}
	
}

