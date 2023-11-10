package com.dragomirgdaniel.licenta.monitor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MonitorService {

    private final MonitorRepository monitorRepository;

    public MonitorService(MonitorRepository monitorRepository) {
        this.monitorRepository = monitorRepository;
    }

    public List<Monitor> findAll() {
        return monitorRepository.findAll();
    }

    public <S extends Monitor> S save(S entity) {
        return monitorRepository.save(entity);
    }
    public void update(Monitor entity,Integer idMonitor) {
        Optional<Monitor> monitor = monitorRepository.findById(idMonitor);
        Optional<Monitor> monitor1 = monitor.map(monitor2 -> {
            monitor2.setImage(entity.getImage());
            monitor2.setStock(entity.getStock());
            monitor2.setCategory(entity.getCategory());
            monitor2.setPrice(entity.getPrice());
            monitor2.setWarranty(entity.getWarranty());
            monitor2.setName(entity.getName());
            monitor2.setBrand(entity.getBrand());
            monitor2.setDiagonal(entity.getDiagonal());
            monitor2.setResolution(entity.getResolution());
            monitor2.setResponseTime(entity.getResponseTime());
            monitor2.setRefreshRate(entity.getRefreshRate());
            monitor2.setTechnology(entity.getTechnology());
            monitor2.setColor(entity.getColor());
            monitor2.setAspectRatio(entity.getAspectRatio());
            monitor2.setPorts(entity.getPorts());
            monitor2.setOther(entity.getOther());
            return  monitor2;
        });


        monitorRepository.save(monitor1.get());
    }

    public Optional<Monitor> findById(Integer integer) {
        return monitorRepository.findById(integer);
    }

    public void deleteById(Integer integer) {
        monitorRepository.deleteById(integer);
    }
}
