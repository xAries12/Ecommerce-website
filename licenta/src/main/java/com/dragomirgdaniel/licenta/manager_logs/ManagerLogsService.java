package com.dragomirgdaniel.licenta.manager_logs;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagerLogsService {
    private final ManagerLogsRepository managerLogsRepository;

    public ManagerLogsService(ManagerLogsRepository managerLogsRepository) {
        this.managerLogsRepository = managerLogsRepository;
    }

    public List<ManagerLogs> findAll() {
        return managerLogsRepository.findAll();
    }

    public <S extends ManagerLogs> S save(S entity) {
        return managerLogsRepository.save(entity);
    }

    public void deleteById(Integer idManagerLogs) {
        managerLogsRepository.deleteById(idManagerLogs);
    }

    public List<ManagerLogs> findByIdc(int idc) {
        return managerLogsRepository.findByIdc(idc);
    }
}
