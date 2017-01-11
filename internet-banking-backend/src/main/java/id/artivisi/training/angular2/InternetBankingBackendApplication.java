package id.artivisi.training.angular2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@SpringBootApplication
@EnableResourceServer
public class InternetBankingBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(InternetBankingBackendApplication.class, args);
	}
}
