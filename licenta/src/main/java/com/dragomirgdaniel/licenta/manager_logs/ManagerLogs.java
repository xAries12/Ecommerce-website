package com.dragomirgdaniel.licenta.manager_logs;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Entity
@Table(name = "manager_logs", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ManagerLogs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idmanager_logs", nullable = false)
    private Integer idManagerLogs;

    @Column(name = "manager_log_action", nullable = false)
    private String managerLogAction;

    @Column(name = "manager_log_date", nullable = false)
    private LocalDateTime managerLogDate;

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
        managerLogDate = LocalDateTime.now().truncatedTo(ChronoUnit.MINUTES);
    }
}
