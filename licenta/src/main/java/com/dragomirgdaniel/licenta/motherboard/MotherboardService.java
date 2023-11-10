package com.dragomirgdaniel.licenta.motherboard;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MotherboardService {
    public final MotherboardRepository motherboardRepository;

    public MotherboardService(MotherboardRepository motherboardRepository) {
        this.motherboardRepository = motherboardRepository;
    }

    public List<Motherboard> findAll() {
        return motherboardRepository.findAll();
    }

    public <S extends Motherboard> S save(S entity) {
        return motherboardRepository.save(entity);
    }

    public void update(Motherboard entity,Integer idMotherboard) {
        Optional<Motherboard> motherboard = motherboardRepository.findById(idMotherboard);
        Optional<Motherboard> motherboard1 = motherboard.map(motherboard2 -> {
            motherboard2.setImage(entity.getImage());
            motherboard2.setStock(entity.getStock());
            motherboard2.setCategory(entity.getCategory());
            motherboard2.setPrice(entity.getPrice());
            motherboard2.setWarranty(entity.getWarranty());
            motherboard2.setName(entity.getName());
            motherboard2.setFormat(entity.getFormat());
            motherboard2.setProcessorSocket(entity.getProcessorSocket());
            motherboard2.setMemoryType(entity.getMemoryType());
            motherboard2.setNumberOfSlots(entity.getNumberOfSlots());
            motherboard2.setAudioChipset(entity.getAudioChipset());
            motherboard2.setIntegratedNetworkcard(entity.getIntegratedNetworkcard());
            motherboard2.setIntegratedVideocard(entity.getIntegratedVideocard());
            motherboard2.setSataNumber(entity.getSataNumber());
            motherboard2.setSsdNumber(entity.getSsdNumber());
            motherboard2.setOther(entity.getOther());
            return  motherboard2;
        });
        motherboardRepository.save(motherboard1.get());
    }

    public Optional<Motherboard> findById(Integer idMotherboard) {
        return motherboardRepository.findById(idMotherboard);
    }

    public void deleteById(Integer idMotherboard) {
        motherboardRepository.deleteById(idMotherboard);
    }
}
