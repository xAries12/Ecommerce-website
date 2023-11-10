package com.dragomirgdaniel.licenta.admin_logs;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminLogsService {
    private final AdminLogsRepository adminLogsRepository;

    public AdminLogsService(AdminLogsRepository adminLogsRepository) {
        this.adminLogsRepository = adminLogsRepository;
    }

    public List<AdminLogs> findAll() {
        return adminLogsRepository.findAll();
    }

    public <S extends AdminLogs> S save(S entity) {
        return adminLogsRepository.save(entity);
    }

    public void deleteById(Integer idAdminLogs) {
        adminLogsRepository.deleteById(idAdminLogs);
    }

    public List<AdminLogs> findByIdc(int idc) {
        return adminLogsRepository.findByIdc(idc);
    }
}
