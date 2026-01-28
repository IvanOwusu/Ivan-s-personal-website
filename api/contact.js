export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    
    // Log the received data (this will show up in Vercel function logs)
    console.log('Contact form submission:', { name, email, subject, message });

    // In a real application, you would integrate with an email service here (e.g., SendGrid, Resend)
    // For now, we return a success response to simulate a working backend
    
    return res.status(200).json({ 
      success: true, 
      message: 'Message received successfully!' 
    });
  }

  // Handle any other HTTP method
  return res.status(405).json({ 
    success: false, 
    message: 'Method not allowed' 
  });
}
