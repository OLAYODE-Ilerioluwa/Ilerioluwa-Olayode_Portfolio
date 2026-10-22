package com.corco.corcoback.controller;

import com.corco.corcoback.entity.User;
import com.corco.corcoback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Autorise ton application React (Vite)
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    // Route pour s'inscrire
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User newUser) {
        Optional<User> existingUser = userRepository.findByEmail(newUser.getEmail());
        if (existingUser.isPresent()) {
            return ResponseEntity.badRequest().body("Cet email est déjà utilisé.");
        }

        userRepository.save(newUser);
        return ResponseEntity.ok("Compte créé avec succès !");
    }

    // Route pour se connecter
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginUser) {
        Optional<User> user = userRepository.findByEmail(loginUser.getEmail());

        if (user.isPresent() && user.get().getPasswordHash().equals(loginUser.getPasswordHash())) {
            return ResponseEntity.ok("Connexion réussie !");
        }

        return ResponseEntity.status(401).body("Email ou mot de passe incorrect.");
    }
}