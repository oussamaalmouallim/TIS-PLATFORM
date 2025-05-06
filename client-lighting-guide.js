function loadLightingGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Configuration des circuits d'éclairage</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> Un système d'éclairage bien conçu améliore votre confort et peut réduire considérablement votre consommation énergétique.
            </div>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="schema_variateur.png" alt="Circuit d'éclairage" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Principes fondamentaux</h4>
                    <p>Dans un système domotique TIS, les éclairages peuvent être contrôlés de multiples façons :</p>
                    <ul>
                        <li>Allumage/extinction simple (modules relais)</li>
                        <li>Variation d'intensité (modules variateurs)</li>
                        <li>Changement de couleur (modules RGB/RGBW)</li>
                        <li>Programmation horaire</li>
                        <li>Détection de présence ou de luminosité</li>
                    </ul>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Types d'éclairage compatibles</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-lightbulb text-warning"></i> Éclairage standard</h5>
                                    <ul>
                                        <li>Ampoules incandescentes</li>
                                        <li>Halogènes</li>
                                        <li>Tubes fluorescents</li>
                                        <li>Compatible avec: modules relais</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-adjust text-primary"></i> Éclairage variable</h5>
                                    <ul>
                                        <li>LED dimmables</li>
                                        <li>Halogènes basse tension</li>
                                        <li>Incandescentes</li>
                                        <li>Compatible avec: modules variateurs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-palette text-success"></i> Éclairage couleur</h5>
                                    <ul>
                                        <li>Bandeaux LED RGB/RGBW</li>
                                        <li>Ampoules connectées</li>
                                        <li>Appliques et spots colorés</li>
                                        <li>Compatible avec: modules RGB/RGBW</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Configuration des modules d'éclairage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <h4>Configuration d'un module relais</h4>
                    <ol>
                        <li>Dans votre projet, accédez à la section "Équipements" puis "Modules"</li>
                        <li>Sélectionnez le module relais que vous souhaitez configurer</li>
                        <li>Pour chaque sortie (canal) :
                            <ul>
                                <li>Donnez un nom explicite (ex: "Plafonnier salon")</li>
                                <li>Sélectionnez le type de charge (résistive, inductive)</li>
                                <li>Définissez le mode de fonctionnement (standard, temporisé)</li>
                                <li>Associez la sortie à une pièce et un emplacement</li>
                            </ul>
                        </li>
                        <li>Configurez les entrées associées (interrupteurs physiques)</li>
                        <li>Appliquez les changements</li>
                    </ol>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Configuration d'un variateur</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Accédez à la configuration du module variateur</li>
                                <li>Pour chaque canal :
                                    <ul>
                                        <li>Nommez le circuit (ex: "Spots cuisine")</li>
                                        <li>Sélectionnez le type de charge (LED, halogène, etc.)</li>
                                        <li>Ajustez les paramètres spécifiques :
                                            <ul>
                                                <li>Niveau minimum (généralement 10-20% pour LED)</li>
                                                <li>Niveau maximum (100% par défaut)</li>
                                                <li>Vitesse de variation (lente à rapide)</li>
                                                <li>Courbe de gradation (linéaire ou logarithmique)</li>
                                            </ul>
                                        </li>
                                        <li>Programmez le comportement des entrées :
                                            <ul>
                                                <li>Appui court : On/Off</li>
                                                <li>Appui long : Variation</li>
                                                <li>Double-clic : Niveau mémorisé</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Testez le fonctionnement avec l'option "Test"</li>
                                <li>Sauvegardez la configuration</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Création de scènes d'éclairage</h3>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <h4>Qu'est-ce qu'une scène d'éclairage ?</h4>
                    <p>Une scène d'éclairage est un ensemble de réglages prédéfinis pour plusieurs luminaires, créant une ambiance particulière adaptée à différentes activités ou moments de la journée.</p>
                    
                    <h5>Exemples de scènes courantes :</h5>
                    <ul>
                        <li><strong>Lecture</strong> : Éclairage directionnel à intensité moyenne</li>
                        <li><strong>Cinéma</strong> : Éclairage tamisé indirect ou désactivé</li>
                        <li><strong>Dîner</strong> : Éclairage chaud sur la table, ambiance douce ailleurs</li>
                        <li><strong>Soirée</strong> : Éclairage d'accentuation avec couleurs atmosphériques</li>
                        <li><strong>Nuit</strong> : Veilleuse ou éclairage de circulation à faible intensité</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>Créer une scène d'éclairage</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Accédez à "Scénarios" puis "Nouvelle scène"</li>
                                <li>Nommez votre scène (ex: "Lecture salon")</li>
                                <li>Sélectionnez les points d'éclairage à inclure</li>
                                <li>Pour chaque luminaire, définissez :
                                    <ul>
                                        <li>État (On/Off)</li>
                                        <li>Niveau d'intensité (0-100%)</li>
                                        <li>Couleur (si applicable)</li>
                                        <li>Temps de transition (fondu)</li>
                                    </ul>
                                </li>
                                <li>Définissez les déclencheurs (boutons, horaires, etc.)</li>
                                <li>Testez et ajustez si nécessaire</li>
                                <li>Sauvegardez la scène</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Automatisation intelligente de l'éclairage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Options d'automatisation avancées</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <h5><i class="fas fa-clock text-primary"></i> Automatisation temporelle</h5>
                                    <ul>
                                        <li>Programmation horaire fixe</li>
                                        <li>Programmation selon lever/coucher du soleil</li>
                                        <li>Calendriers hebdomadaires</li>
                                        <li>Événements saisonniers</li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <h5><i class="fas fa-motion-detector text-primary"></i> Automatisation par capteurs</h5>
                                    <ul>
                                        <li>Détecteurs de présence/mouvement</li>
                                        <li>Capteurs de luminosité</li>
                                        <li>Capteurs d'ouverture de porte</li>
                                        <li>Combinaisons de multiples capteurs</li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <h5><i class="fas fa-brain text-primary"></i> Automatisation contextuelle</h5>
                                    <ul>
                                        <li>Mode "Présence" vs "Absence"</li>
                                        <li>Mode "Jour" vs "Nuit"</li>
                                        <li>Mode "Vacances" (simulation de présence)</li>
                                        <li>Apprentissage des habitudes</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-lightbulb"></i> <strong>Conseil :</strong> Pour une automatisation parfaite, combinez plusieurs types de déclencheurs et conditions. Par exemple : "Allumer l'éclairage du couloir à 30% si détection de mouvement ET niveau de luminosité faible ET entre 22h et 6h".
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous savez maintenant comment configurer et optimiser votre système d'éclairage intelligent !
            </div>
            <p>Consultez nos autres guides pour découvrir toutes les possibilités de votre installation TIS.</p>
            <a href="#" class="btn btn-primary mt-3"><i class="fas fa-download"></i> Télécharger le guide PDF complet sur l'éclairage</a>
        </div>
    `;
}

