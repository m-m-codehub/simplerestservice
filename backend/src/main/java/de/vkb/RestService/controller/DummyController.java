package de.vkb.RestService.controller;

import de.vkb.RestService.domainmodel.entities.Dummy;
import de.vkb.RestService.api.DummyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class DummyController {

    private final DummyService dummyService;

    @GetMapping("/dummies")
    public List<Dummy> getAllDummies(){
        return dummyService.getAll();
    }

    @PostMapping(value = "/dummies")
    public String createDummy(@RequestBody Dummy dummy){
        return dummyService.createDummy(dummy);
    }
}


