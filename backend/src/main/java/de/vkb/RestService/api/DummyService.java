package de.vkb.RestService.api;

import de.vkb.RestService.domainmodel.entities.Dummy;
import de.vkb.RestService.repository.DummyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class DummyService {

    private final DummyRepository dummyRepository;

    public List<Dummy> getAll(){
        return dummyRepository.findAll();
    }

    public String createDummy(Dummy dummy) {
        dummyRepository.save(dummy);
        // Gib das Dummy-Objekt als String in der Konsole aus
        System.out.println("Empfangenes Dummy-Objekt: " + dummy.toString());
        return "Dummy '" + dummy.getName() + "' wurde erfolgreich gesendet!";
    }
}
