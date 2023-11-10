package com.dragomirgdaniel.licenta.ram_memory;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RamMemoryService {
    private final RamMemoryRepository ramMemoryRepository;

    public RamMemoryService(RamMemoryRepository ramMemoryRepository) {
        this.ramMemoryRepository = ramMemoryRepository;
    }

    public List<RamMemory> findAll() {
        return ramMemoryRepository.findAll();
    }

    public <S extends RamMemory> S save(S entity) {
        return ramMemoryRepository.save(entity);
    }

    public void update(RamMemory entity,Integer idRamMemory) {
        Optional<RamMemory> ramMemory = ramMemoryRepository.findById(idRamMemory);
        Optional<RamMemory> ramMemory1 = ramMemory.map(ramMemory2 -> {
            ramMemory2.setImage(entity.getImage());
            ramMemory2.setStock(entity.getStock());
            ramMemory2.setCategory(entity.getCategory());
            ramMemory2.setPrice(entity.getPrice());
            ramMemory2.setWarranty(entity.getWarranty());
            ramMemory2.setName(entity.getName());
            ramMemory2.setSeries(entity.getSeries());
            ramMemory2.setType(entity.getType());
            ramMemory2.setCapacity(entity.getCapacity());
            ramMemory2.setFrequency(entity.getFrequency());
            ramMemory2.setLighting(entity.getLighting());
            ramMemory2.setColor(entity.getColor());
            ramMemory2.setOther(entity.getOther());
            return ramMemory2;
        });
        ramMemoryRepository.save(ramMemory1.get());
    }

    public Optional<RamMemory> findById(Integer idRamMemory) {
        return ramMemoryRepository.findById(idRamMemory);
    }

    public void deleteById(Integer idRamMemory) {
        ramMemoryRepository.deleteById(idRamMemory);
    }
}
