class Utils {


    static carrouselElements(obj){
        let targetElement  = obj.targetElement;
        let lopCarrousel   = obj.loopCarrousel || true;
        let navCarrousel   = obj.navCarrousel || true;
        let autoPlayCarrousel = obj.autoPlayCarrousel || true;
        let autoPlayCarrouselTime = obj.autoPlayCarrouselTime || 0;
      
        $(`${targetElement}`).owlCarousel({
            loop:lopCarrousel || true,
            nav: navCarrousel || true,
            autoplay: autoPlayCarrousel || true,
            autoplayTimeout: autoPlayCarrouselTime || 0,
            responsive: obj.responsive
        });
      }



}