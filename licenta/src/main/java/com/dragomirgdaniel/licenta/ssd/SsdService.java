package com.dragomirgdaniel.licenta.ssd;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SsdService {
    public final SsdRepository ssdRepository;

    public SsdService(SsdRepository ssdRepository) {
        this.ssdRepository = ssdRepository;
    }

    public List<Ssd> findAll() {
        return ssdRepository.findAll();
    }

    public <S extends Ssd> S save(S entity) {
        return ssdRepository.save(entity);
    }

    public void update(Ssd entity,Integer idSsd) {
        Optional<Ssd> ssd = ssdRepository.findById(idSsd);
        Optional<Ssd> ssd1 = ssd.map(ssd2 -> {
            ssd2.setImage(entity.getImage());
            ssd2.setStock(entity.getStock());
            ssd2.setCategory(entity.getCategory());
            ssd2.setPrice(entity.getPrice());
            ssd2.setWarranty(entity.getWarranty());
            ssd2.setName(entity.getName());
            ssd2.setTypeSsd(entity.getTypeSsd());
            ssd2.setSeries(entity.getSeries());
            ssd2.setFormFactor(entity.getFormFactor());
            ssd2.setInterfaceType(entity.getInterfaceType());
            ssd2.setNvmeSupport(entity.getNvmeSupport());
            ssd2.setCapacity(entity.getCapacity());
            ssd2.setMaxReading(entity.getMaxReading());
            ssd2.setMaxWrite(entity.getMaxWrite());
            ssd2.setOther(entity.getOther());
            return ssd2;
        });

        ssdRepository.save(ssd1.get());
    }

    public Optional<Ssd> findById(Integer idSsd) {
        return ssdRepository.findById(idSsd);
    }

    public void deleteById(Integer idSsd) {
        ssdRepository.deleteById(idSsd);
    }
}
