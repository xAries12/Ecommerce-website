package com.dragomirgdaniel.licenta.mouse;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MouseService {
    private final MouseRepository mouseRepository;

    public MouseService(MouseRepository mouseRepository) {
        this.mouseRepository = mouseRepository;
    }

    public List<Mouse> findAll() {
        return mouseRepository.findAll();
    }

    public <S extends Mouse> S save(S entity) {
        return mouseRepository.save(entity);
    }
    public void update(Mouse entity,Integer idMouse) {
    Optional<Mouse> mouse = mouseRepository.findById(idMouse);
    Optional<Mouse> mouse1 = mouse.map(mouse2 -> {
        mouse2.setImage(entity.getImage());
        mouse2.setStock(entity.getStock());
        mouse2.setCategory(entity.getCategory());
        mouse2.setPrice(entity.getPrice());
        mouse2.setWarranty(entity.getWarranty());
        mouse2.setName(entity.getName());
        mouse2.setBrand(entity.getBrand());
        mouse2.setTechnology(entity.getTechnology());
        mouse2.setMouseInterface(entity.getMouseInterface());
        mouse2.setSensorType(entity.getSensorType());
        mouse2.setMaximumResolution(entity.getMaximumResolution());
        mouse2.setNumberButtons(entity.getNumberButtons());
        mouse2.setScrollWheel(entity.getScrollWheel());
        mouse2.setColor(entity.getColor());
        mouse2.setSize(entity.getSize());
        mouse2.setWeight(entity.getWeight());
        mouse2.setSupportedOs(entity.getSupportedOs());
        mouse2.setOther(entity.getOther());
        return mouse2;
    });
    mouseRepository.save(mouse1.get());
    }

    public Optional<Mouse> findById(Integer integer) {
        return mouseRepository.findById(integer);
    }

    public void deleteById(Integer integer) {
        mouseRepository.deleteById(integer);
    }
}
