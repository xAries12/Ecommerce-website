package com.dragomirgdaniel.licenta.admin_logs;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Entity
@Table(name = "admin_logs", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminLogs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idadmin_logs", nullable = false)
    private Integer idAdminLogs;

    @Column(name = "admin_log", nullable = false)
    private String adminLog;

    @Column(name = "admin_log_date", nullable = false)
    private LocalDateTime adminLogDate;

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
        adminLogDate = LocalDateTime.now().truncatedTo(ChronoUnit.MINUTES);
    }
}
