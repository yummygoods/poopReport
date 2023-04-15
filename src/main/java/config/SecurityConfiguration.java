package config;

//USED THIS REFERENCE https://reflectoring.io/spring-security/
//and updated from ant matchers specified there to request matchers: https://docs.spring.io/spring-security/reference/5.8/migration/servlet/config.html

/*

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableConfigurationProperties(BasicAuthProperties.class)
public class SecurityConfiguration {

    public static final String[] ENDPOINTS_WHITELIST = {
            "/css/**",
            "/",
            "/login",
            "/home"
    };
    public static final String LOGIN_URL = "/login";
    public static final String LOGOUT_URL = "/logout";
    public static final String LOGIN_FAIL_URL = LOGIN_URL + "?error";
    public static final String DEFAULT_SUCCESS_URL = "/home";
    public static final String USERNAME = "username";
    public static final String PASSWORD = "password";

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                                                            // .requestMatchers("/api/admin/**").hasRole("ADMIN")
                                                            // .requestMatchers("/api/user/**").hasRole("USER")
                                                            // trying without "api" below
                                                            .requestMatchers("/admin/**").hasRole("ADMIN")
                                                            .requestMatchers("/user/**").hasRole("USER")
                                                            .anyRequest().authenticated()
                )
                */
/* .csrf().disable()*//*

                .formLogin(form -> form
                                           .loginPage(LOGIN_URL)
                                           .loginProcessingUrl(LOGIN_URL)
                                           .failureUrl(LOGIN_FAIL_URL)
                                           .usernameParameter(USERNAME)
                                           .passwordParameter(PASSWORD)
                                           .defaultSuccessUrl(DEFAULT_SUCCESS_URL))
             */
/*   .logout(logout -> logout
                                          .logoutUrl("/logout")
                                          .invalidateHttpSession(true)
                                          .deleteCookies("JSESSIONID")
                                          .logoutSuccessUrl(LOGIN_URL + "?logout"))
                .sessionManagement(session -> session
                                                      .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
                                                      .invalidSessionUrl("/invalidSession.htm")
                                                      .maximumSessions(1)
                                                      .maxSessionsPreventsLogin(true))*//*


        ;


        return http.build();
    }

}*/