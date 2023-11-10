package com.dragomirgdaniel.licenta.user_log;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;


@Entity
@Table(name = "user_logs", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserLogs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "iduser_logs", nullable = false)
    private Integer idUserLogs;

    @Column(name = "user_log_action", nullable = false)
    private String userLogAction;

    @Column(name = "user_log_date", nullable = false)
    private LocalDateTime userLogDate;

    @Column(name = "idc", nullable = false)
    private Integer idc;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "firstname", nullable = false)
    private String firstname;

    @Column(name = "lastname", nullable = false)
    private String lastname;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @PrePersist
    protected void onCreate() {
        userLogDate = LocalDateTime.now().truncatedTo(ChronoUnit.MINUTES);
    }
}
