  <script>
        document.addEventListener('DOMContentLoaded', function() {
            const popupLink = document.getElementById('popupLink');
            const popup = document.getElementById('popup');
            const closePopup = document.getElementById('closePopup');
            const popupHeader = document.querySelector('.popup-header');

            let isDraggingPopup = false;
            let offsetX, offsetY;

            // Open popup
            popupLink.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default link behavior
                popup.style.display = 'block';
            });

            // Close popup
            closePopup.addEventListener('click', function() {
                popup.style.display = 'none';
            });

            // Dragging the popup
            popupHeader.addEventListener('mousedown', function(e) {
                isDraggingPopup = true;
                offsetX = e.clientX - popup.offsetLeft;
                offsetY = e.clientY - popup.offsetTop;
                document.body.style.cursor = 'move'; // Change cursor during drag
            });

            document.addEventListener('mousemove', function(e) {
                if (isDraggingPopup) {
                    popup.style.left = `${e.clientX - offsetX}px`;
                    popup.style.top = `${e.clientY - offsetY}px`;
                }
            });

            document.addEventListener('mouseup', function() {
                if (isDraggingPopup) {
                    isDraggingPopup = false;
                    document.body.style.cursor = 'default'; // Reset cursor after drag
                }
            });
        });
    </script>
