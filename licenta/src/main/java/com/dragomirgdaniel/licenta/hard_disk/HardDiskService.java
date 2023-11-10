package com.dragomirgdaniel.licenta.hard_disk;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HardDiskService {
    private final HardDiskRepository hardDiskRepository;

    public HardDiskService(HardDiskRepository hardDiskRepository) {
        this.hardDiskRepository = hardDiskRepository;
    }

    public List<HardDisk> findAll() {
        return hardDiskRepository.findAll();
    }

    public <S extends HardDisk> S save(S entity) {
        return hardDiskRepository.save(entity);
    }

    public void update(HardDisk entity,Integer idHardDisk) {
        Optional<HardDisk> hardDisk = hardDiskRepository.findById(idHardDisk);
        Optional<HardDisk> hardDisk1 = hardDisk.map(hardDisk2 -> {
            hardDisk2.setImage(entity.getImage());
            hardDisk2.setStock(entity.getStock());
            hardDisk2.setCategory(entity.getCategory());
            hardDisk2.setPrice(entity.getPrice());
            hardDisk2.setWarranty(entity.getWarranty());
            hardDisk2.setName(entity.getName());
            hardDisk2.setSeries(entity.getSeries());
            hardDisk2.setInterfaceType(entity.getInterfaceType());
            hardDisk2.setTypeHdd(entity.getTypeHdd());
            hardDisk2.setCapacity(entity.getCapacity());
            hardDisk2.setBuffer(entity.getBuffer());
            hardDisk2.setSpeed(entity.getSpeed());
            hardDisk2.setOther(entity.getOther());
            return  hardDisk2;
        });
        hardDiskRepository.save(hardDisk1.get());
    }

    public Optional<HardDisk> findById(Integer idHardDisk) {
        return hardDiskRepository.findById(idHardDisk);
    }

    public void deleteById(Integer idHardDisk) {
        hardDiskRepository.deleteById(idHardDisk);
    }
}
