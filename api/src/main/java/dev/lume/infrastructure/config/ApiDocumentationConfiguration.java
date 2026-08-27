package dev.lume.infrastructure.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiDocumentationConfiguration {

    @Bean
    OpenAPI lumeOpenApi() {
        return new OpenAPI()
                .info(new Info()
                        .title("Lume API")
                        .version("v1")
                        .description("HTTP API for the Lume ERP platform."));
    }
}
